import { EditorFrameObjects } from "./types";

export interface TutorialObject{
    name: string;
    difficulty: number;
    url: string;
    initialState: EditorFrameObjects;
    tests: TestObjects,
    nextAvailableId: number,
}

export interface TestObject{
    name: string;
    description: string;
    expectedOutput: string;
    test: string;
    complete: boolean;
}

export interface TutorialObjects {
    [id: string]: TutorialObject;
}

export interface TestObjects{
    [id: number]: TestObject;
}