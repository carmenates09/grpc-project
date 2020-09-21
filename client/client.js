let grpc = require('grpc');

let services = require('../server/protos/dummy_grpc_pb');

function main() {
    console.log('Hello From Client')
    let client = new services.DummyServiceClient('localhost:50051', grpc.credentials.createInsecure())
    console.log('client', client);
}

main();