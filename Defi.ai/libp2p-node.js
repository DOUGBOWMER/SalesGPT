const Libp2p = require("libp2p");
const Websockets = require("libp2p-websockets");
const WebRTCStar = require("libp2p-webrtc-star");
const Mplex = require("libp2p-mplex");

async function setupLibp2pNode() {
  const node = await Libp2p.create({
    modules: {
      transport: [Websockets, WebRTCStar],
      streamMuxer: [Mplex],
    },
  });

  await node.start();
  console.log('Libp2p node started');
}
module.exports = setupLibp2pNode;
