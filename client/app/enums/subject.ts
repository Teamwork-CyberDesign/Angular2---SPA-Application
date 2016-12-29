export enum Subject {
    None,
    Algebra,
    Arts,
    Biology,
    Bulgarian,
    Chemistry,
    Economics,
    English,
    Geography,
    Geometry,
    History,
    Informatics,
    Music,
    Philosophy,
    Physics,
    Psychology,
    Spanish,
    Sports,
    Technologies
}

export const SubjectsAsString = Object.keys(Subject)
    .map(s => Subject[s])
    .filter(v => typeof v === 'string' && v !== 'None');

