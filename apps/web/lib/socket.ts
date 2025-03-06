import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_API_URL as string, {
  auth: { token: "" },
  autoConnect: false,
});

export default socket;
