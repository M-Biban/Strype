import {CaretPosition, EditorFrameObjects, RootContainerFrameDefinition, ImportsContainerDefinition, FuncDefContainerDefinition, MainFramesContainerDefinition, getFrameDefType, AllFrameTypesIdentifier} from "@/types/types";

const initialGameState: EditorFrameObjects = {
    0: {
        id: 0,
        frameType : RootContainerFrameDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [-1, -2, -3],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: { },
        caretVisibility: CaretPosition.none,
    },
    "-1": {
        id: -1,
        frameType : ImportsContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {},
        isCollapsed: false,
        caretVisibility: CaretPosition.none,
    },
    "-2": {
        id: -2,
        frameType : FuncDefContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [2, 3, 5, 6, 7],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: { },
        isCollapsed: false,
        caretVisibility: CaretPosition.none,
    },
    "-3": {
        id: -3,
        frameType : MainFramesContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [1,4],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {},
        isCollapsed: false,
        caretVisibility: CaretPosition.body,
    },

    1: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.varassign),
        id: 1,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "game_map"}]}},
            1: {slotStructures: {operators: [{code: ""}, {code: ""}], fields: [{code: ""}, {openingBracketValue: "{", fields:[{code: "\"start\": {\"description\": \"You are in a dark room. There's a door to the north.\",\"options\": {\"north\": \"hallway\"}},\"hallway\": {\"description\": \"A narrow hallway stretches ahead. You see a door to the east and a locked door to the west.\",\"options\": {\"east\": \"kitchen\", \"west\": \"locked_room\"}},\"kitchen\": {\"description\": \"You are in a dusty kitchen. There's a rusty key on the table.\",\"options\": {\"west\": \"hallway\"},\"item\": \"key\"},\"locked_room\": {\"description\": \"The door is locked. You need a key.\",\"options\": {}}", quote: "\""}], operators: []}, {code: ""}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    2: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.funcdef),
        id: 2,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -2,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "enter_room"}]}},
            1: {slotStructures: {operators: [], fields: [{code: "room"}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    3: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.funcdef),
        id: 3,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -2,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "pick_up_item"}]}},
            1: {slotStructures: {operators: [], fields: [{code: "room"}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    4: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.varassign),
        id: 4,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "inventory"}]}},
            1: {slotStructures: {operators: [{code: ""}, {code: ""}], fields: [{code: ""}, {openingBracketValue: "[", fields:[{code: ""}], operators: []}, {code: ""}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    5: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.funcdef),
        id: 5,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -2,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "enter_locked_room"}]}},
            1: {slotStructures: {operators: [], fields: [{code: ""}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    6: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.funcdef),
        id: 6,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -2,
        childrenIds: [8],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "enter_dragon_room"}]}},
            1: {slotStructures: {operators: [], fields: [{code: ""}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    7: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.funcdef),
        id: 7,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -2,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {
            0: {slotStructures: {operators: [], fields: [{code: "main"}]}},
            1: {slotStructures: {operators: [], fields: [{code: ""}]}},
        },
        caretVisibility: CaretPosition.none,
    },

    8: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.comment),
        id: 8,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 6,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        labelSlotsDict: {0: {slotStructures: {operators: [], fields: [{code: "optional! make it fun!"}]}}},
        caretVisibility: CaretPosition.none,
    },

};

export default initialGameState;