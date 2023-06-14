import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  return (
    <>
      <h2>Contact Us</h2>
      <p>Contact using this secure form below:</p>
      <form>
        <fieldset>

            <legend>Contact Information</legend>

            <label className="required" for="firstlast" >First and Last Name
                  <input type="text" name="firstlast" id="firstlast" maxlength="100" required placeholder="Albert Einstein" autofocus />
              </label>
              <label className="required" for="email">Email
                  <input type="email" 
                    name="email" id="email" 
                    size="30" maxlength="100" 
                    required 
                    pattern="[^ @]+@[^ @]+.[a-z]+"
                    placeholder="name@host.com" />
              </label>

            
        </fieldset> 
        <fieldset>
            <legend>Tell us some fun facts about yourself</legend>

            
            <label for="color">What is your favorite color?</label>
                <select name="color" id="color">
                    
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Pink">Pink</option>
                    <option value="Red">Red</option>
                    <option value="Yellow">Yellow</option>      
                    <option value="Other">Other</option>
                </select>

            
            <p className="fastfood">Do you eat fast food?</p>
                
                <label className="fastfood_response" for="food">
                    <input type="radio" name="food" id="always" value="always"/>
                  Always                
                    <input type="radio" name="food" id="sometimes" value="sometimes"/>
                  Sometimes               
                    <input type="radio" name="food" id="rarely" value="rarely"/>
                  Rarely           
                    <input type="radio" name="food" id="never" value="never"/>
                    Never</label>
                

            <p className="fastfood">Which fast food restaurants do you enjoy?</p>
                <label className="fastfood_response" for="restaurants">
                    <input type="checkbox" name="restaurants" id="chipotle" value="Chipotle"/>Chipotle
                    <input type="checkbox" name="restaurants" id="KFC" value="KFC"/>KFC
                    <input type="checkbox" name="restaurants" id="In N Out" value="In N Out"/>In N Out              
                    <input type="checkbox" name="restaurants" id="mcdonalds" value="McDonalds"/>McDonald's                              
                    <input type="checkbox" name="restaurants" id="taco bell" value="Taco Bell"/>Taco Bell              
                    <input type="checkbox" name="restaurants" id="other" value="Other"/>Other
                    <input type="checkbox" name="restaurants" id="None" value="None"/>None
                </label>
            
         
            <p><label className="required" for="goals">What are your goals?</label>
              <textarea name="goals" id="goals" minlength="1" maxlength="200" required placeholder="Write 200 characters or less." ></textarea>
            </p>
            <label className="fastfood_response" for="contact">
                <input type="checkbox" name="contact" id="contact"/>Contact me with updates!
            </label>
         
            <button type="submit">Submit</button>
        </fieldset>
    </form>
  </>
  );
}

export default ContactPage;