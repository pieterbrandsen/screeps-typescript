interface Memory {
  version: { major: string; minor: string; patch: string; branch: string; revision: string };
  creeps: { [key: string]: CreepMemory };
  flags: { [key: string]: FlagMemory };
  powerCreeps: { [key: string]: PowerCreepMemory };
  rooms: { [key: string]: RoomMemory };
  spawns: { [key: string]: SpawnMemory };
  logLevel: number;
  [key: string]: any; // allow for full clear of the memory
}
