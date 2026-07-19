import dns from "dns/promises";

try {
  const records = await dns.resolveSrv(
    "_mongodb._tcp.cluster0.gotb4wp.mongodb.net"
  );

  console.log(records);
} catch (err) {
  console.error(err);
}