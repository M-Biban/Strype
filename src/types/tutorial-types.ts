import { EditorFrameObjects } from "./types";

export interface TutorialObject{
    name: string;
    difficulty: number;
    url: string;
    initialState: EditorFrameObjects;
    tests: TestObjects,
    nextAvailableId: number,
    description: string;
}

export interface TestObject{
    name: string;
    description: string;
    expectedOutput: any[];
    test: string[];
    complete: boolean;
    hint: string;
}

export interface TutorialObjects {
    [id: string]: TutorialObject;
}

export interface TestObjects{
    [id: number]: TestObject;
}