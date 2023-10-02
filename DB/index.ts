// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { openDatabase } from "react-native-sqlite-storage";

let db = openDatabase("sai.db")

export const runQuery = async (query: string,fnVal,fnMsg) => {
    console.log("running query: "+query)
    db.transaction(function (txn) {
        //console.log(txn)
        txn.executeSql(
            query,
            [],
            function (tx, res) {
                console.log(tx);
                console.log(res.rows.raw());
                fnVal(res.rows.raw())
            } ,function(err){
                fnVal([err])
            }

        );
    }, function (error) {
        // console.log('Transaction ERROR: ' + error.message);
        fnMsg('Transaction ERROR: ' + error.message);
    }, function () {
        // console.log('Populated database OK');
        fnMsg('Populated database OK');
    });

}