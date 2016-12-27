export enum Subject {
    Biology,
    Math,
    English,
    History,
    Geography,
    Philosophy,
    PhysicalEducation,
    Bulgarian,
    None
}

export const SubjectsAsString = Object.keys(Subject)
    .map(s => Subject[s])
    .filter(v => typeof v === 'string');

