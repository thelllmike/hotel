import React from 'react';

function MapLocation() {
  return (
    <iframe
      title="Google Map"
      width="1000"
      height="740"
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31685.79037201192!2d79.8404254248674!3d6.923583972839667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1679572560472!5m2!1sen!2slk"
      style={{border:0}}
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
  );
}

export default MapLocation;
