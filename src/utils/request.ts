// import { createState } from '@hookstate/core';
import { encode, decode } from '@msgpack/msgpack';

export const init = () => {
  const socket = new WebSocket('ws://localhost:9001');
  socket.onmessage = e => {
    console.log(e);
  };

  socket.onopen = () => {
    give('/user/login', { userName: 'droog126', password: '1212126000' });
  };

  function give(path, data) {
    const newData = { path, meth: 'give', token: 'tao', data };
    var buff = encode(newData);
    socket.send(buff);
  }
  return { give };
};

export default init();
