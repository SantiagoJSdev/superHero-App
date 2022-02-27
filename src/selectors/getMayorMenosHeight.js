


export const getMayorMenosHeight = (value,heroes) => {
  
    
    let data = []
    data = heroes.map(e => e.appearance.height.filter(ele =>
        (ele.includes('cm'))).map(ele => ele.substring(0, 1) === '0'
            ?
            { num: 0, id: e.id }
            :
            ({ num: ele.substring(0, 3).trim() * 1, id: e.id })))


    let resul = []
    data.filter(ele => ele.forEach(ele => resul.push({ num: ele.num, id: ele.id })))
   
    let sortData = value === "Less" ?
        resul.sort((a, b) => {
            if (a.num > b.num) {
                return 1;
            }
            if (b.num > a.num) {
                return -1;
            }
            return 0;
        })
        :
        resul.sort((a, b) => {
            if (a.num > b.num) {
                return -1;
            }
            if (b.num > a.num) {
                return 1;
            }
            return 0;
        });

    return sortData

}