import React, { useState, useEffect } from 'react';
import JsSIP from 'jssip';

const Softphone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callStatus, setCallStatus] = useState('Desconectado');
  const [ua, setUa] = useState(null);
  const [incomingSession, setIncomingSession] = useState(null); // Para llamadas entrantes

  useEffect(() => {
    // Configuración para TLS (WSS)
    const socket = new JsSIP.WebSocketInterface('wss://sip.linphone.org'); // Puerto 5061 para TLS
    const configuration = {
      sockets: [socket],
      uri: 'sip:tranquilopatitas@sip.linphone.org', // Tu usuario SIP
      password: 'AqcH3f.xFJf4.s2', // Contraseña SIP
      display_name: 'TuNombre',
    };

    const userAgent = new JsSIP.UA(configuration);

    // Evento de registro
    userAgent.on('registered', () => setCallStatus('Registrado en el servidor SIP'));
    userAgent.on('unregistered', () => setCallStatus('Registro fallido'));
    userAgent.on('registrationFailed', (e) => setCallStatus(`Error: ${e.cause}`));

    // Evento para llamadas entrantes
    userAgent.on('newRTCSession', (data) => {
      const { session } = data;
      if (session.direction === 'incoming') { // Solo responder si es una llamada entrante
        setIncomingSession(session);
        setCallStatus('Llamada entrante...');
        
        // Responder automáticamente a la llamada entrante
        session.answer({
          mediaConstraints: { audio: true, video: false },
        });
      }
    });

    userAgent.start();
    setUa(userAgent);

    return () => {
      userAgent.stop();
    };
  }, []);

  // Lógica para llamadas salientes
  const handleCall = () => {
    if (!phoneNumber || !ua) return;

    const eventHandlers = {
      progress: () => setCallStatus('Llamando...'),
      failed: (e) => setCallStatus(`Error: ${e.cause}`),
      ended: () => setCallStatus('Llamada finalizada'),
      confirmed: () => setCallStatus('Llamada conectada'),
    };

    const options = {
      eventHandlers,
      mediaConstraints: { audio: true, video: false },
    };

    // Iniciar llamada saliente
    ua.call(`sip:${phoneNumber}@sip.linphone.org`, options);
  };

  // Colgar llamada (funciona para entrantes y salientes)
  const handleHangUp = () => {
    if (incomingSession) {
      incomingSession.terminate();
      setIncomingSession(null);
    }
    setCallStatus('Llamada terminada');
  };

  return (
    <div className="softphone-container">
      <h2>Softphone con TLS (Linphone)</h2>
      <input
        type="text"
        placeholder="Número SIP"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleCall} disabled={!ua || callStatus === 'Llamando...'}>
        Llamar
      </button>
      <button onClick={handleHangUp} disabled={!incomingSession && callStatus !== 'Llamada conectada'}>
        Colgar
      </button>
      <p>Estado: {callStatus}</p>
    </div>
  );
};

export default Softphone;