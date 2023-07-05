import  {CHANGE_SEARCH_FIELD,

    REQ_PIC_PENDING, REQ_PIC_SUCCESS, REQ_PIC_FAILED,
    REQ_BRANCH_PENDING, REQ_BRANCH_SUCCESS, REQ_BRANCH_FAILED,
   
   //  REQ_NAMES_PENDING, REQ_NAMES_SUCCESS, REQ_NAMES_FAILED,
    REQ_CATEGORY_PENDING, REQ_CATEGORY_SUCCESS, REQ_CATEGORY_FAILED,
   
    REQ_CATEGORYONE_PENDING, REQ_CATEGORYONE_SUCCESS, REQ_CATEGORYONE_FAILED,
    REQ_PERSON_PENDING, REQ_PERSON_SUCCESS, REQ_PERSON_FAILED,
   
    REQ_FILE_PENDING, REQ_FILE_SUCCESS, REQ_FILE_FAILED
} from './constant';

const initStateSearch = {
    searchField: ''
}

export const searcher = (state=initStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
            default:
            return state
    }
}


const initStatePics = {
    pics: [],
    isPending: true
}

export const picsReducer = (state=initStatePics, action={}) => {
    switch (action.type) {
        case REQ_PIC_PENDING:
            return Object.assign({}, state, {pics: action.payload})
        case REQ_PIC_SUCCESS:
            return Object.assign ({}, state, {pics: action.payload})
        case REQ_PIC_FAILED:
            return Object.assign({}, state, {pics: action.payload})
    }
}

const initStatePerson = {
    persons: [],
    isPending: true
}

export const personReducer = (state=initStatePerson, action={}) => {
    switch (action.type) {
        case REQ_PERSON_PENDING:
            return Object.assign({}, state, {persons: action.payload})
        case REQ_PERSON_SUCCESS:
            return Object.assign ({}, state, {persons: action.payload})
        case REQ_PERSON_FAILED:
            return Object.assign({}, state, {persons: action.payload})
    }
}

const initStateBranch = {
    branches: [],
    isPending: true
}

export const branchReducer = (state=initStateBranch, action={}) => {
    switch (action.type) {
        case REQ_BRANCH_PENDING:
            return Object.assign({}, state, {branches: action.payload})
        case REQ_BRANCH_SUCCESS:
            return Object.assign ({}, state, {branches: action.payload})
        case REQ_BRANCH_FAILED:
            return Object.assign({}, state, {branches: action.payload})
    }
}

const initStateFile = {
    files: [],
    isPending: true
}

export const filesReducer = (state=initStateFile, action={}) => {
    switch (action.type) {
        case REQ_FILE_PENDING:
            return Object.assign({}, state, {files: action.payload})
        case REQ_FILE_SUCCESS:
            return Object.assign ({}, state, {files: action.payload})
        case REQ_FILE_FAILED:
            return Object.assign({}, state, {files: action.payload})
    }
}

const initStateCategory = {
    category: [],
    isPending: true
}

export const categoryReducer = (state=initStateCategory, action={}) => {
    switch (action.type) {
        case REQ_CATEGORY_PENDING:
            return Object.assign({}, state, {category: action.payload})
        case REQ_CATEGORY_SUCCESS:
            return Object.assign ({}, state, {category: action.payload})
        case REQ_CATEGORY_FAILED:
            return Object.assign({}, state, {category: action.payload})
    }
}

const initStateCategoryOne = {
    categoryOne: [],
    isPending: true
}

export const categoryOneReducer = (state=initStateCategoryOne, action={}) => {
    switch (action.type) {
        case REQ_CATEGORYONE_PENDING:
            return Object.assign({}, state, {categoryOne: action.payload})
        case REQ_CATEGORYONE_SUCCESS:
            return Object.assign ({}, state, {categoryOne: action.payload})
        case REQ_CATEGORYONE_FAILED:
            return Object.assign({}, state, {categoryOne: action.payload})
    }
}