import React from 'react'

const WhoAmISection = () => {
  return (
    <section className="whoami">
      <h1>Whoami</h1>

      <div className="row">
        <div className="col-xs-4">
          <Image src="/images/braga-bebe.jpg" alt="Me with 1 year" />
          <h5>A nice baby</h5>
          <p>
            I'm this beautiful baby in the photo.<br/>
            Unique friendliness and cuteness.
          </p>
        </div>
        <div className="col-xs-4">
          <Image src="/images/braga-nerd.jpg" alt="Me with 4 years" />
          <h5>Nerd since early</h5>
          <p>
            Early breaking my uncle's 486DX4.<br/>
            Always very curious and studious.
          </p>
        </div>
        <div className="col-xs-4">
          <Image src="/images/braga-chico.jpg" alt="My dog with me" />
          <h5>My dog's dad</h5>
          <p>
            This is Chico, my big mutt son.<br/>
            Click to see this cuteness!
          </p>
        </div>
        <div className="col-xs-4">
          <Image src="/images/braga-playing.jpg" alt="Me playing with Escape from the World" />
          <h5>A dedicated musician</h5>
          <p>
            Actually playing on the bands<br/>
            <b>Sociopata</b> and <b>Revel</b>
          </p>
        </div>
        <div className="col-xs-4">
          <Image src="/images/braga-titio.jpg" alt="Me and Ian" />
          <h5>A happy titio</h5>
          <p>
            After some diaper changes,<br/>
            we learn to be adults.
          </p>
        </div>
        <div className="col-xs-4">
          <Image src="/images/braga-sociopata.jpg" alt="After Sociopata rehearsal" />
          <h5>And me with Sociopata</h5>
          <p>
            After a rehearsal,<br/>
            we're all happy to be playing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoAmISection
