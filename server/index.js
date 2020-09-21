
let grpc = require('grpc');

function main() {
    let server = new grpc.Server();

    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
    server.start();

    console.log('Server runnin on prot 127.0.0.1');
}
main();