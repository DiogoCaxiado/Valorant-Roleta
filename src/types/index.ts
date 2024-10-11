export interface AgentsType {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: null;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[]
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: {
      uuid: string;
      displayName: string;
      description: string;
      displayIcon: string;
      assetPath: string;
    }
    recruitmentData: null;
    abilities: [AgentAbilities, AgentAbilities, AgentAbilities , AgentAbilities]
    voiceLine: null
  }

interface AgentAbilities {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}