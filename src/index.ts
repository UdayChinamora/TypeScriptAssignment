


const javaBook : { ISBN: string, Title: string, Publisher: string,Price:number,
AuthorFname:string,AuthorLName :string, Copyright:number,Comments:string} = 
   { ISBN: "0 - 596 - 00016 - 2",
    Title: "Java and XML",
    Price: 39.95,
    Publisher: "O'Reilly &amp; Associates",
    AuthorFname: "Brett",
    AuthorLName: "McLaughlin",
    Copyright: 2000,
    Comments: "Update required"

};
  
  const VB6Book :{ ISBN: string, Title: string, Publisher: string,Price:number,
Authors:any, Copyright:number,Comments:string} = 
  
  {
    ISBN: "1-861003-32-3",
    Title: "Professional Visual Basic 6 XML",
    Price: 49.99,
    Publisher: "Wrox Press",
    Authors: ['James  Britt', 'Tuen Duynstee'],
    Copyright: 2000,
    Comments: "Outdated text. Switch to C#",
 
    };

    function multiply(a: number, b: number) {
        return a * b;
      }

      console.log(multiply(2,5));