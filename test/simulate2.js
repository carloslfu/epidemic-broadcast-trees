var u = require('../util')
var tape = require('tape')
var sim = require('../simulate')

//state is {source, sink, nodeState, log, old_length}

sim.runner(process.argv[2], sim.basic(function () {
  return sim.createSimulation(3,3,'AB,BC')
}))

