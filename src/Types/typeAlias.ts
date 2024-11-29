// Same object example as seen in   Lists/objects.ts:
type Employe = { // THIS IS A TYPE-ALIAS. IT CAN BE REUSED IN MULTIPLE PLACES
    readonly id: number,
     name: string,
      retire: (data: Date) => void 
}

let employe: Employe = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
        
    }
};
