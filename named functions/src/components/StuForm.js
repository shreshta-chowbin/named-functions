import React, { useRef } from 'react'

function StuForm() {
    
    
    let eng1InputRef= useRef();
    let sans1InputRef= useRef();
    let mathsA1InputRef= useRef();
    let mathsB1InputRef= useRef();
    let phy1InputRef= useRef();
    let chem1InputRef= useRef();

    let eng2InputRef= useRef();
    let sans2InputRef= useRef();
    let mathsA2InputRef= useRef();
    let mathsB2InputRef= useRef();
    let phy2InputRef= useRef();
    let chem2InputRef= useRef();
    let phyPracInputRef= useRef();
    let chemPracInputRef= useRef();

    let result1ParaRef= useRef();
    let result2ParaRef= useRef();
    let result12ParaRef= useRef();

    let stuNameRef= useRef();
    let parentNameRef= useRef();
    let gaurdianNameRef= useRef();
    let gaurdiaRelationRef= useRef();

    let eng1SpanRef= useRef();
    let sans1SpanRef= useRef();
    let mathsA1SpanRef= useRef();
    let mathsB1SpanRef= useRef();
    let phy1SpanRef= useRef();
    let chem1SpanRef= useRef();
    
    let eng2SpanRef= useRef();
    let sans2SpanRef= useRef();
    let mathsA2SpanRef= useRef();
    let mathsB2SpanRef= useRef();
    let phy2SpanRef= useRef();
    let chem2SpanRef= useRef();
    let phyPracSpanRef= useRef();
    let chemPracSpanRef= useRef();
    
    let result1Ref= useRef();
    
    let legend1MarksRef= useRef();
    let legend2MarksRef= useRef();
    
    
    let onFocusStuDetails= () => {
        
        console.log("Student Name onFocus");
        stuNameRef.current.style.backgroundColor="lightskyblue";
        // stuNameRef.current.value= " enter your full name";
    }
    

    let marks1 = () => {

        
        let eng1Marks= Number(eng1InputRef.current.value);
        let sans1Marks= Number(sans1InputRef.current.value);
        let mathsA1Marks= Number(mathsA1InputRef.current.value);
        let mathsB1Marks= Number(mathsB1InputRef.current.value);
        let phy1Marks= Number(phy1InputRef.current.value);
        let chem1Marks= Number(chem1InputRef.current.value);
        
        let stuName= stuNameRef.current.value;
        let parentName= parentNameRef.current.value;
        
        let totMarks1= eng1Marks + sans1Marks + mathsA1Marks + mathsB1Marks + phy1Marks + chem1Marks;
        let perc1= totMarks1/470*100;
        
        result1ParaRef.current.innerHTML= `${stuName} ${parentName} scored ${totMarks1.toFixed(2)}/470 with ${perc1.toFixed(2)}%`;
    
        result1ParaRef.current.style.backgroundColor="white";
        result1ParaRef.current.style.border="2px solid black";
        result1ParaRef.current.style.width="fit-content";
        
        if(perc1>=35)
        {
            result1Ref.current.style.backgroundColor="lightgreen";
        }
        else
        {
            result1Ref.current.style.backgroundColor="red";
        }
    }


    return (
    <div>
      <form className='stuFormDiv'>


        <div className='stuDetailsDiv'>
            <fieldset>
            <legend>Student Details</legend>
        <div>
            <label>Student Name</label>
            <input placeholder='Enter Your Full Name' ref={stuNameRef}
             onFocus={() => {
                onFocusStuDetails ()
                }}
                onChange={() => {
                    console.log("Student Name onChange");
                    stuNameRef.current.style.fontSize="1rem";
                }}
                onBlur={() => {
                    console.log("Student Name onBlur");
                    stuNameRef.current.style.backgroundColor="";
                    stuNameRef.current.style.fontSize="";
                    legend1MarksRef.current.innerHTML= stuNameRef.current.value;
                    legend2MarksRef.current.innerHTML= stuNameRef.current.value;

                }}
            ></input>

            <label>Gender</label>
            <input type='radio' name='gender'></input>
            <label>Male</label>
            <input type='radio' name='gender'></input>
            <label>Female</label>
        </div>
        <div>
            <label>Parent Name</label>
            <input ref={parentNameRef}
             onFocus={() => {
                console.log("Parent Name onFocus");
                parentNameRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Parent Name onChange");
                parentNameRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Parent Name onBlur");
                parentNameRef.current.style.backgroundColor="";
                parentNameRef.current.style.fontSize="";
            }}
            ></input>
            <select>
                <option>Father</option>
                <option>Mother</option>
            </select>
        </div>    
        <div>
            <label>Gaurdian</label>
            <input ref={gaurdianNameRef}
             onFocus={() => {
                 console.log("Gaurdian Name onFocus");
                 gaurdianNameRef.current.style.backgroundColor="lightskyblue";
                }}
                onChange={() => {
                console.log("Gaurdian Name onChange");
                gaurdianNameRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Gaurdian Name onBlur");
                gaurdianNameRef.current.style.backgroundColor="";
                gaurdianNameRef.current.style.fontSize="";
            }}
            ></input>
            <label>Relation</label>
            <input ref={gaurdiaRelationRef}
            onFocus={() => {
                console.log("Gaurdian Relation Name onFocus");
               gaurdiaRelationRef.current.style.backgroundColor="lightskyblue";
           }}
           onChange={() => {
               console.log("Gaurdian Relation Name onChange");
               gaurdiaRelationRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Gaurdian Relation Name onBlur");
                gaurdiaRelationRef.current.style.backgroundColor="";
                gaurdiaRelationRef.current.style.fontSize="";
           }}
           ></input>
        </div>
        </fieldset>
        </div>


        <div className='subjDiv'>
            <fieldset>
                <legend>Subject</legend>
        <div className='paraSubHeading'>
            <p>PART-I</p>
        </div>
        <div>    
            <p>ENGLISH</p>
        </div>
        <div className='paraSubHeading'>
            <p>PART-II</p>
        </div>   
        <div> 
            <p>SANSKRIT</p>
        </div>
        <div className='paraSubHeading'>
            <p>PART-III</p>
        </div>
        <div>    
            <p>MATHEMATICS A</p>
        </div>
        <div>
            <p>MATHEMATICS B</p>
        </div>
        <div>
            <p>PHYSICS</p>
        </div>
        <div>
            <p>CHEMISTRY</p>
        </div>
        <div>
            <p>PHYSICS PRACTICALS</p>
        </div>
        <div>
            <p>CHEMISTRY PRACTICALS</p>
        </div>
        <div className='hidden'>
        <fieldset>
            <legend><button type='button'>TOTAL</button></legend>
            <p className='resultPara' ref={result1ParaRef}></p>
        </fieldset>
        </div>
        </fieldset>
        </div>



        <div className='maxMarksDiv'>
            <fieldset>
            <legend>Marks</legend>

        <div>
            <span className='marksHeading'> Marks</span>
            <span className='marksHeading'>Pass.Marks</span>
        </div>
        <div>    
            <span>100</span>
            <span>35</span>
        </div>
        <div className='paraSubHeading hidden'>
            <p>PART-II</p>
        </div>
        <div>    
            <span>100</span>
            <span>35</span>
        </div>
        <div className='paraSubHeading hidden'>
            <p>PART-III</p>
        </div>
        <div>    
            <span>75</span>
            <span>26.25</span>
        </div>
        <div>
            <span>75</span>
            <span>26.25</span>
        </div>
        <div>
            <span>60</span>
            <span>21</span>
        </div>
        <div>
            <span>60</span>
            <span>21</span>
        </div>
        <div>
            <span>30</span>
            <span>10.5</span>
        </div>
        <div>
            <span>30</span>
            <span>10.5</span>
        </div>
        <div className='hidden'>
        <fieldset>
            <legend><button type='button'>TOTAL</button></legend>
            <p className='resultPara' ref={result1ParaRef}></p>
        </fieldset>
        </div>
        </fieldset>
        </div>



        <div className='marks1Div'>
            <fieldset>
                <legend><span ref={legend1MarksRef}>Student</span> 's I year Marks</legend>
        <div className='paraSubHeading hidden'>
            <p>PART-I</p>
        </div>
        <div>    
            <input type='number' ref={eng1InputRef} 
    
    onFocus={() => {
        console.log("English (I YEAR) Input onFocus");
        eng1InputRef.current.style.backgroundColor="lightskyblue";
    }}
    onChange={() => {
        console.log("English (I YEAR) Input onChange"); 
        eng1InputRef.current.style.fontSize="1rem";
    }}
    onBlur={() => {
        console.log("English (I YEAR) Input onBlur");
        eng1InputRef.current.style.backgroundColor="";
        eng1InputRef.current.style.fontSize="";
        // eng1SpanRef.current.innerHTML= eng1InputRef.current.value>=35?"PASS":"FAIL";
        // eng1SpanRef.current.style.backgroundColor= eng1InputRef.current.value>=35?"lightgreen":"red";

        if(eng1InputRef.current.value>=35)
        {
            eng1SpanRef.current.innerHTML="PASS";
            eng1SpanRef.current.style.backgroundColor="lightgreen";
        }
        else
        {
            eng1SpanRef.current.innerHTML="FAIL";
            eng1SpanRef.current.style.backgroundColor="red";
        }
    }}
    
    ></input>

            <span ref={eng1SpanRef}></span>

        </div>
        <div className='paraSubHeading hidden'>
            <p>PART-II</p>
        </div>
        <div>    
            <input type='number' ref={sans1InputRef}
            
            onFocus={() => {
                console.log("Sanskrit (I YEAR) Input onFocus");
                sans1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Sanskrit (I YEAR) Input onChange");
                sans1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Sanskrit (I YEAR) Input onBlur");
                sans1InputRef.current.style.backgroundColor="";
                sans1InputRef.current.style.fontSize="";
                // sans1SpanRef.current.innerHTML= sans1InputRef.current.value>=35?"PASS":"FAIL";
                // sans1SpanRef.current.style.backgroundColor= sans1InputRef.current.value>=35?"lightgreen":"red";

                if(sans1InputRef.current.value>=35)
                    {
                        sans1SpanRef.current.innerHTML="PASS";
                        sans1SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        sans1SpanRef.current.innerHTML="FAIL";
                        sans1SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={sans1SpanRef}></span>
        </div>
        <div className='paraSubHeading hidden'>
            <p>PART-III</p>
        </div>
        <div>    
            <input type='number' ref={mathsA1InputRef}
            
            onFocus={() => {
                console.log("Mathematics A (I YEAR) Input onFocus");
                mathsA1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Mathematics A (I YEAR) Input onChange");
                mathsA1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Mathematics A (I YEAR) Input onBlur");
                mathsA1InputRef.current.style.backgroundColor="";
                mathsA1InputRef.current.style.fontSize="";
                // mathsA1SpanRef.current.innerHTML= mathsA1InputRef.current.value>=26.25?"PASS":"FAIL";
                // mathsA1SpanRef.current.style.backgroundColor= mathsA1InputRef.current.value>=26.25?"lightgreen":"red";

                if(mathsA1InputRef.current.value>=26.25)
                    {
                        mathsA1SpanRef.current.innerHTML="PASS";
                        mathsA1SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        mathsA1SpanRef.current.innerHTML="FAIL";
                        mathsA1SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={mathsA1SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={mathsB1InputRef} 
            
            onFocus={() => {
                console.log("Mathematics B (I YEAR) Input onFocus");
                mathsB1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Mathematics B (I YEAR) Input onChange");
                mathsB1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Mathematics B (I YEAR) Input onBlur");
                mathsB1InputRef.current.style.backgroundColor="";
                mathsB1InputRef.current.style.fontSize="";
                // mathsB1SpanRef.current.innerHTML= mathsB1InputRef.current.value>=26.25?"PASS":"FAIL";
                // mathsB1SpanRef.current.style.backgroundColor= mathsB1InputRef.current.value>=26.25?"lightgreen":"red";

                if(mathsB1InputRef.current.value>=26.25)
                    {
                        mathsB1SpanRef.current.innerHTML="PASS";
                        mathsB1SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        mathsB1SpanRef.current.innerHTML="FAIL";
                        mathsB1SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={mathsB1SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={phy1InputRef} 
            
            onFocus={() => {
                console.log("Physics (I YEAR) Input onFocus");
                phy1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Physics (I YEAR) Input onChange");
                phy1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Physics (I YEAR) Input onBlur");
                phy1InputRef.current.style.backgroundColor="";
                phy1InputRef.current.style.fontSize="";
                // phy1SpanRef.current.innerHTML= phy1InputRef.current.value>=21?"PASS":"FAIL";
                // phy1SpanRef.current.style.backgroundColor= phy1InputRef.current.value>=21?"lightgreen":"red";

                if(phy1InputRef.current.value>=21)
                    {
                        phy1SpanRef.current.innerHTML="PASS";
                        phy1SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        phy1SpanRef.current.innerHTML="FAIL";
                        phy1SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={phy1SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={chem1InputRef}
            
            onFocus={() => {
                console.log("Chemistry (I YEAR) Input onFocus");
                chem1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Chemistry (I YEAR) Input onChange");
                chem1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Chemistry (I YEAR) Input onBlur");
                chem1InputRef.current.style.backgroundColor="";
                chem1InputRef.current.style.fontSize="";
                // chem1SpanRef.current.innerHTML= chem1InputRef.current.value>=21?"PASS":"FAIL";
                // chem1SpanRef.current.style.backgroundColor= chem1InputRef.current.value>=21?"lightgreen":"red";

                if(chem1InputRef.current.value>=21)
                    {
                        chem1SpanRef.current.innerHTML="PASS";
                        chem1SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        chem1SpanRef.current.innerHTML="FAIL";
                        chem1SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={chem1SpanRef}></span>
        </div>
        <div>
            <input type='number' className='hidden'></input>
        </div>
        <div>
            <input type='number' className='hidden'></input>
        </div>
        <div>
            <fieldset ref={result1Ref}>
                <legend><button type='button'
                
                onClick={() => {

                    marks1();


                    // if(parentNameRef.current.value>=1)
                    // {
                    // result1ParaRef.current.innerHTML= `${stuName} ${parentName} scored ${totMarks1.toFixed(2)}/470 with ${perc1.toFixed(2)}%`;
                    // }
                    // else
                    // {
                    // result1ParaRef.current.innerHTML= `${stuName} ${gaurdianName} scored ${totMarks1.toFixed(2)}/470 with ${perc1.toFixed(2)}%`;
                    // }
                }}

                >TOTAL</button></legend>
                <p ref={result1ParaRef} className='resultPara'></p>
            </fieldset>
        </div>
        </fieldset>
        </div>



        <div className='marks2Div'>
            <fieldset>
                <legend><span ref={legend2MarksRef}>Student</span> 's II year Marks</legend>
        <div className='paraSubHeading hidden'>
            <p>PART-I</p>
        </div>
        <div>
                <input type='number' ref={eng2InputRef}
               onFocus={() => {
                console.log("English (II YEAR) Input onFocus");
                eng2InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("English (II YEAR) Input onChange");
                eng2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("English (II YEAR) Input onBlur");
                eng2InputRef.current.style.backgroundColor="";
                eng2InputRef.current.style.fontSize="";
                // eng2SpanRef.current.innerHTML= eng2InputRef.current.value>=35?"PASS":"FAIL";
                // eng2SpanRef.current.style.backgroundColor= eng2InputRef.current.value>=35?"lightgreen":"red";

                if(eng2InputRef.current.value>=35)
                    {
                        eng2SpanRef.current.innerHTML="PASS";
                        eng2SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        eng2SpanRef.current.innerHTML="FAIL";
                        eng2SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={eng2SpanRef}></span>
        </div>
        <div className='paraSubHeading hidden'>
            <p>PART-II</p>
        </div>
        <div>    
            <input type='number' ref={sans2InputRef}
               onFocus={() => {
                console.log("Sanskrit (II YEAR) Input onFocus");
                sans2InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Sanskrit (II YEAR) Input onChange");
                sans2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Sanskrit (II YEAR) Input onBlur");
                sans2InputRef.current.style.backgroundColor="";
                sans2InputRef.current.style.fontSize="";
                // sans2SpanRef.current.innerHTML= sans2InputRef.current.value>=35?"PASS":"FAIL";
                // sans2SpanRef.current.style.backgroundColor= sans2InputRef.current.value>=35?"lightgreen":"red";

                if(sans2InputRef.current.value>=35)
                    {
                        sans2SpanRef.current.innerHTML="PASS";
                        sans2SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        sans2SpanRef.current.innerHTML="FAIL";
                        sans2SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={sans2SpanRef}></span>
        </div>
        <div  className='paraSubHeading hidden'>
            <p>PART-III</p>
        </div>
        <div>    
            <input type='number' ref={mathsA2InputRef}
               onFocus={() => {
                console.log("Mathematics A (II YEAR) Input onFocus");
                mathsA2InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Mathematics A (II YEAR) Input onChange");
                mathsA2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Mathematics A (II YEAR) Input onBlur");
                mathsA2InputRef.current.style.backgroundColor="";
                mathsA2InputRef.current.style.fontSize="";
                // mathsA2SpanRef.current.innerHTML= mathsA2InputRef.current.value>=26.25?"PASS":"FAIL";
                // mathsA2SpanRef.current.style.backgroundColor= mathsA2InputRef.current.value>=26.25?"lightgreen":"red";

                if(mathsA2InputRef.current.value>=26.25)
                    {
                        mathsA2SpanRef.current.innerHTML="PASS";
                        mathsA2SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        mathsA2SpanRef.current.innerHTML="FAIL";
                        mathsA2SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={mathsA2SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={mathsB2InputRef}
               onFocus={() => {
                console.log("Mathematics B (II YEAR) Input onFocus");
                mathsB2InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Mathematics B (II YEAR) Input onChange");
                mathsB2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Mathematics B (II YEAR) Input onBlur");
                mathsB2InputRef.current.style.backgroundColor="";
                mathsB2InputRef.current.style.fontSize="";
                // mathsB2SpanRef.current.innerHTML= mathsB2InputRef.current.value>=26.25?"PASS":"FAIL";
                // mathsB2SpanRef.current.style.backgroundColor= mathsB2InputRef.current.value>=26.25?"lightgreen":"red";

                if(mathsB2InputRef.current.value>=26.25)
                    {
                        mathsB2SpanRef.current.innerHTML="PASS";
                        mathsB2SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        mathsB2SpanRef.current.innerHTML="FAIL";
                        mathsB2SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={mathsB2SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={phy2InputRef}
               onFocus={() => {
                console.log("Physics (II YEAR) Input onFocus");
                phy2InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Physics (II YEAR) Input onChange");
                phy2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Physics (II YEAR) Input onBlur");
                phy2InputRef.current.style.backgroundColor="";
                phy2InputRef.current.style.fontSize="";
                // phy2SpanRef.current.innerHTML= phy2InputRef.current.value>=21?"PASS":"FAIL";
                // phy2SpanRef.current.style.backgroundColor= phy2InputRef.current.value>=21?"lightgreen":"red";

                if(phy2InputRef.current.value>=21)
                    {
                        phy2SpanRef.current.innerHTML="PASS";
                        phy2SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        phy2SpanRef.current.innerHTML="FAIL";
                        phy2SpanRef.current.style.backgroundColor="red";
                    }
                    
            }}
            ></input>
            <span ref={phy2SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={chem2InputRef}
               onFocus={() => {
                console.log("Chemistry (II YEAR) Input onFocus");
                chem2InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Chemistry (II YEAR) Input onChange");
                chem2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Chemistry (II YEAR) Input onBlur");
                chem2InputRef.current.style.backgroundColor="";
                chem2InputRef.current.style.fontSize="";
                // chem2SpanRef.current.innerHTML= chem2InputRef.current.value>=21?"PASS":"FAIL";
                // chem2SpanRef.current.style.backgroundColor= chem2InputRef.current.value>=21?"lightgreen":"red";

                if(chem2InputRef.current.value>=21)
                    {
                        chem2SpanRef.current.innerHTML="PASS";
                        chem2SpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        chem2SpanRef.current.innerHTML="FAIL";
                        chem2SpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={chem2SpanRef}></span>
        </div>
        <div>
            <input type='number' ref={phyPracInputRef}
               onFocus={() => {
                console.log("Physics Practical Input onFocus");
                phyPracInputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Physics Practical Input onChange");
                phyPracInputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Physics Practical Input onBlur");
                phyPracInputRef.current.style.backgroundColor="";
                phyPracInputRef.current.style.fontSize="";
                // phyPracSpanRef.current.innerHTML= phyPracInputRef.current.value>=10.5?"PASS":"FAIL";
                // phyPracSpanRef.current.style.backgroundColor= phyPracInputRef.current.value>=10.5?"lightgreen":"red";

                if(phyPracInputRef.current.value>=10.5)
                    {
                        phyPracSpanRef.current.innerHTML="PASS";
                        phyPracSpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        phyPracSpanRef.current.innerHTML="FAIL";
                        phyPracSpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={phyPracSpanRef}></span>
        </div>
        <div>
            <input type='number' ref={chemPracInputRef}
               onFocus={() => {
                console.log("Chemistry Practical Input onFocus");
                chemPracInputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Chemistry Practical Input onChange");
                chemPracInputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Chemistry Practical Input onBlur");
                chemPracInputRef.current.style.backgroundColor="";
                chemPracInputRef.current.style.fontSize="";
                // chemPracSpanRef.current.innerHTML= chemPracInputRef.current.value>=10.5?"PASS":"FAIL";
                // chemPracSpanRef.current.style.backgroundColor= chemPracInputRef.current.value>=10.5?"lightgreen":"red";

                if(chemPracInputRef.current.value>=10.5)
                    {
                        chemPracSpanRef.current.innerHTML="PASS";
                        chemPracSpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else
                    {
                        chemPracSpanRef.current.innerHTML="FAIL";
                        chemPracSpanRef.current.style.backgroundColor="red";
                    }
            }}
            ></input>
            <span ref={chemPracSpanRef}></span>
        </div>
        <div>
            <fieldset>
                <legend><button type='button'

                onClick={() => {

                    let eng2Marks= Number(eng2InputRef.current.value);
                    let sans2Marks= Number(sans2InputRef.current.value);
                    let mathsA2Marks= Number(mathsA2InputRef.current.value);
                    let mathsB2Marks= Number(mathsB2InputRef.current.value);
                    let phy2Marks= Number(phy2InputRef.current.value);
                    let chem2Marks= Number(chem2InputRef.current.value);
                    let phyPracMarks= Number(phyPracInputRef.current.value);
                    let chemPracMarks= Number(chemPracInputRef.current.value);

                    let stuName= stuNameRef.current.value;
                    let parentName= parentNameRef.current.value;

                    let totMarks2= eng2Marks + sans2Marks + mathsB2Marks + mathsA2Marks + phy2Marks + chem2Marks + phyPracMarks +chemPracMarks;
                    let perc2= totMarks2/530*100;

                    result2ParaRef.current.innerHTML= `${stuName} ${parentName} scored ${totMarks2}/530 with ${perc2.toFixed(2)}%`

                }}

                >TOTAL</button></legend>
                <p className='resultPara' ref={result2ParaRef}></p>
            </fieldset>
        </div>
        </fieldset>
        </div>


        <div className='resultDiv'>
            <fieldset>
                <legend><button type='button'
                
                onClick={() => {

                    let eng1Marks= Number(eng1InputRef.current.value);
                    let sans1Marks= Number(sans1InputRef.current.value);
                    let mathsA1Marks= Number(mathsA1InputRef.current.value);
                    let mathsB1Marks= Number(mathsB1InputRef.current.value);
                    let phy1Marks= Number(phy1InputRef.current.value);
                    let chem1Marks= Number(chem1InputRef.current.value);
                    
                    let stuName= stuNameRef.current.value;
                    let parentName= parentNameRef.current.value;

                    let totMarks1= eng1Marks + sans1Marks + mathsA1Marks + mathsB1Marks + phy1Marks + chem1Marks;
                    let perc1= totMarks1/470*100;

                    let eng2Marks= Number(eng2InputRef.current.value);
                    let sans2Marks= Number(sans2InputRef.current.value);
                    let mathsA2Marks= Number(mathsA2InputRef.current.value);
                    let mathsB2Marks= Number(mathsB2InputRef.current.value);
                    let phy2Marks= Number(phy2InputRef.current.value);
                    let chem2Marks= Number(chem2InputRef.current.value);
                    let phyPracMarks= Number(phyPracInputRef.current.value);
                    let chemPracMarks= Number(chemPracInputRef.current.value);

                    let totMarks2= eng2Marks + sans2Marks + mathsB2Marks + mathsA2Marks + phy2Marks + chem2Marks + phyPracMarks +chemPracMarks;
                    let perc2= totMarks2/530*100;

                    let totMarks12= totMarks1 + totMarks2;
                    let perc12= (perc1 + perc2)/2;

                    result12ParaRef.current.innerHTML= `${stuName} ${parentName} scored ${totMarks12}/1000 with ${perc12.toFixed(2)}%`

                }}
                >RESULT</button></legend>
                <p className='resultPara' ref={result12ParaRef}></p>
            </fieldset>
        </div>




      </form>
    </div>
  )
}

export default StuForm
