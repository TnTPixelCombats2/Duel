// A shared library about commands and their extensions.
// Imports:
import { Teams, Spawns } from 'pixel_combats/room';
import { Color } from 'pixel_combats/basic';

// The functions of the commands, and their names:
export const RedTeam_NAME = 'Red';
export const BlueTeam_NAME = 'Blue';
export const RedTeamDisplay_NAME = '<b><b><size=30><color=#962605>尺</color><color=#9a040c>ᴇ</color><color=#b8110b>D</color></size></b></b>';
export const BlueTeamDisplay_NAME = '<b><b><size=30><color=#0d177c>ß</color><color=#03088c>l</color><color=#0607b0>ᴜ</color><color=#1621ae>E</color></size></b></b>';
export const RedTeam_SPAWNPOINTSGROUP = 2;
export const BlueTeam_SPAWNPOINTSGROUP = 1;
export const BlueTeam_COLOR = new Color(0, 0, 1, 0);
export const RedTeam_COLOR = new Color(1, 0, 0, 0);

// Create team, red:
export function CreateRedTeam() {
 Teams.Add(RedTeam_NAME, RedTeamDisplay_NAME, RedTeam_COLOR);
 Teams.Spawns.SpawnPointsGroups.Add(RedTeam_SPAWNPOINTSGROUP);
}

// Create team, blue:
export function CreateBlueTeam() {
 Teams.Add(BlueTeam_NAME, BlueTeamDisplay_NAME, BlueTeam_COLOR);
 Teams.Spawns.SpawnPointsGroups.Add(BlueTeam_SPAWNPOINTSGROUP);
}
