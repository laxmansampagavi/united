//calculation for CGPA
function calc_cgpa()
{
    //document.getElementById("cgpavalue").innerHTML="hello";
    const arr=['undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'];
    arr[0]=parseFloat(document.getElementById("first-gpa").value);
    arr[1]=parseFloat(document.getElementById("two-gpa").value);
    arr[2]=parseFloat(document.getElementById("three-gpa").value);
    arr[3]=parseFloat(document.getElementById("four-gpa").value);
    arr[4]=parseFloat(document.getElementById("five-gpa").value);
    arr[5]=parseFloat(document.getElementById("six-gpa").value);
    arr[6]=parseFloat(document.getElementById("seven-gpa").value);
    arr[7]=parseFloat(document.getElementById("eight-gpa").value);
    console.log()
    let sum=0;
    let cnt=0;
    for(var i=0;i<8;i++)
    {
        if(!isNaN(arr[i]))
        {
            sum=sum+arr[i];
            cnt++;
        }
    }
    var cgpa = sum/cnt;
    document.getElementById("cgpavalue").innerHTML=cgpa.toFixed(2);
}
//function for reset all the value of CGPA
function reset_()
{
    document.getElementById("first-gpa").value='';
    document.getElementById("two-gpa").value='';
    document.getElementById("three-gpa").value='';
    document.getElementById("four-gpa").value='';
    document.getElementById("five-gpa").value='';
    document.getElementById("six-gpa").value='';
    document.getElementById("seven-gpa").value='';
    document.getElementById("eight-gpa").value='';
    document.getElementById("cgpavalue").innerHTML='';
    
}
//function for reset all the value of SGPA
function reset_sgpa()
{
    document.getElementById("results").innerHTML='';
    document.getElementById("input1").value='';
    document.getElementById("input2").value='';
    document.getElementById("input3").value='';
    document.getElementById("input4").value='';
    document.getElementById("input5").value='';
    document.getElementById("input6").value='';
    document.getElementById("input7").value='';
    document.getElementById("input8").value='';
    document.getElementById("input9").value='';
}
// calculation for SGPA
function calc_sgpa()
{
        const arr=['undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined', 'undefined'];
        let choose =parseInt(document.getElementById('choose').innerHTML);

        //here each [] inside [[],[]] represents credits of each semester
        const cred=[[2,2,1.5,1.5,1.5,0.5,0.5,0.5],[4,4,3,3,3,1,1,1],[3,4,3,3,3,3,2,2,1],[3,4,3,3,3,3,2,2],[3,4,4,3,3,3,2,2],[4,4,4,3,3,2,2,2,2],[3,3,8,1,3],[3,3,8,1,3]]
        arr[0]=parseFloat(document.getElementById("input1").value);
        arr[1]=parseFloat(document.getElementById("input2").value);
        arr[2]=parseFloat(document.getElementById("input3").value);
        arr[3]=parseFloat(document.getElementById("input4").value);
        arr[4]=parseFloat(document.getElementById("input5").value);
        if(document.getElementById("input6"))
        {
            arr[5]=parseFloat(document.getElementById("input6").value);
        }
        if(document.getElementById("input7"))
        {
            arr[6]=parseFloat(document.getElementById("input7").value);
        }
        if(document.getElementById("input8"))
        {
            arr[7]=parseFloat(document.getElementById("input8").value);
        }
        if(document.getElementById("input9"))
        {
            arr[8]=parseFloat(document.getElementById("input9").value);
        }
        let sum=0;
        let cred_cnt=0;
        for(var i=0;i<9;i++)
        {
            if(!isNaN(arr[i]))
            {
                sum=sum+(arr[i]*cred[choose-1][i]);
                cred_cnt+=cred[choose-1][i];
            }
        }
        let sgpa = (sum/cred_cnt)/10;
        if(!isNaN(sgpa))
        {
        document.getElementById("results").innerHTML=`<h3> SGPA:<span id="sgpavalue">${sgpa.toFixed(2)}</span></h3>
    <h3>Percentage:<span id="persevalue">${((sgpa*10)-7.5).toFixed(2)}</span>%</h3>`
        }
     
}