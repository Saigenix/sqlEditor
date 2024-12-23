import { runParsedQuery } from "../DB"

export const runQuery= (text: string, fnVal: (val: []) => void, fnMsg: (val: string) => void) => {

    // For database related quires
    if (text.includes("database") || text.includes("DATABASE") || text.includes("Database")) {
        if (text.includes("create") || text.includes("CREATE") || text.includes("Create")) {
            fnMsg("Only One Database Allowed & Currently Selected!");
            return;
        }else if(text.includes("use") || text.includes("USE")){
            fnMsg("Only One Database Allowed & Currently Selected!");
            return;
        }else{
            fnMsg("Can't Execute!");
        }
        return;
    }
    // Split multiple queries by ';' and execute only the last query
    const queries = text.split(';').map(query => query.trim()).filter(query => query.length > 0);

    if (queries.length > 1) {
        runParsedQuery(queries[queries.length - 1],fnVal,fnMsg)
    }else   {
        runParsedQuery(text,fnVal,fnMsg)
    }
    // console.log(queries)
}
