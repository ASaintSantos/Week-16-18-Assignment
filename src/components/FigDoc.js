import React from 'react';
import Figure from 'react-bootstrap/Figure';


function FigDoc() {
  return (
    <div>
        <Figure>

            <h3 style={{marginLeft:"180px", paddingTop:"70px"}}>REPENTANCE</h3>
      <Figure.Image
        width={550}
        height={250}
        alt="550x250"
        src="https://static1.squarespace.com/static/5686c7a04bf118b4ed4d40db/t/58c1cd1586e6c0616c2e50fd/1489095967454/?format=1500w"
      />
      <Figure.Caption className='text-center bg-secondary text-white my-4 py-4'>
        "I tell you, Nay: but, except ye repent,<br></br> ye shall all likewise perish"<br></br> - Luke 13:3 -
      </Figure.Caption>
    </Figure><br></br>
    <Figure>

    <h3 style={{marginLeft:"200px", paddingTop:"70px"}}>BAPTISM</h3>
      <Figure.Image
        width={550}
        height={250}
        alt="550x250"
        src="https://img.freepik.com/premium-photo/cartoon-baptismal-candidate-being-baptized-christian-baptism_902820-369.jpg"
      />
      <Figure.Caption className='text-center bg-secondary text-white my-4 py-4'>
        "Then Peter said unto them, Repent,<br></br> and be baptized everyone of you <br></br>in the name of Jesus Christ <br></br>for the remission of sins..."<br></br> - Acts 2:38 - 
      </Figure.Caption>
    </Figure><br></br>
    <Figure>

    <h3 style={{marginLeft:"90px", paddingTop:"70px"}}>INFILLING OF HOLY GHOST</h3>
      <Figure.Image
        width={550}
        height={250}
        alt="550x250"
        src="https://cdn.pixabay.com/photo/2019/12/01/04/57/faith-4664706_640.jpg"
      />
      <Figure.Caption className='text-center bg-secondary text-white my-4 py-4'>
        "Ye shall be baptized with the Holy Ghost<br></br> not many days hence"<br></br> - Acts 1:5 -<br></br><br></br> "And they were all filled with the Holy Ghost,<br></br> and began to speak with other tongues,<br></br> as the Spirit gave them utterance"<br></br> - Acts 2:4 -
      </Figure.Caption>
    </Figure>
    </div>
  )
}

export default FigDoc