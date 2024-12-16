import { io } from 'socket.io-client';

const URL = import.meta.env.MODE === 'development' ? 'http://localhost:3000' : undefined;

export const socket = io(URL);