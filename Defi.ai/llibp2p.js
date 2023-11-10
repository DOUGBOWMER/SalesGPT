const Libp2p = require("libp2p");
const TCP = require("libp2p-tcp");
const Websockets = require("libp2p-websockets");
const SECIO = require("libp2p-secio");
const Multiaddr = require("multiaddr");
const { HeliaIPFS } = require("ipfs-helia");

async function initializeLibp2p() {
  const peerId = await Libp2p.create().peerId.create();
  const listenAddress = "/ip4/0.0.0.0/tcp/0";

  const libp2p = await Libp2p.create({
    peerId,
    addresses: {
      listen: [Multiaddr(listenAddress)],
    },
    modules: {
      transport: [TCP, Websockets],
      connEncryption: [SECIO],
    },
  });

  const heliaIPFS = new HeliaIPFS(libp2p);
  await heliaIPFS.start();

  return { libp2p, heliaIPFS };
}
module.exports = { initializeLibp2p };
