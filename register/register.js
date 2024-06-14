
let count = 0;
const participantSheet = document.getElementById('add');

        function participantTemplate() {
            count++;
            const participantSection = `
                <section class="participant${count}">
                    <p>Participant ${count}</p>
                    <div class="item">
                        <label for="fname${count}">First Name<span>*</span></label>
                        <input id="fname${count}" type="text" name="fname" value="" required />
                    </div>
                    <div class="item activities">
                        <label for="activity${count}">Activity #<span>*</span></label>
                        <input id="activity${count}" type="text" name="activity" />
                    </div>
                    <div class="item">
                        <label for="fee${count}">Fee ($)<span>*</span></label>
                        <input id="fee${count}" type="number" name="fee" />
                    </div>
                    <div class="item">
                        <label for="date${count}">Desired Date<span>*</span></label>
                        <input id="date${count}" type="date" name="date" />
                    </div>
                    <div class="item">
                        <p>Grade</p>
                        <select>
                            <option selected value="" disabled selected></option>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                            <option value="5">5th</option>
                            <option value="6">6th</option>
                            <option value="7">7th</option>
                            <option value="8">8th</option>
                            <option value="9">9th</option>
                            <option value="10">10th</option>
                            <option value="11">11th</option>
                            <option value="12">12th</option>
                        </select>
                    </div>
                </section>
            `;

            participantSheet.insertAdjacentHTML("beforebegin", participantSection);
        }









        submit = docment.getElementById('submitButton');
        submit.addEventListener('submit', submitForm);
        
        function submitForm(event) {
            event.preventDefault();
            // do the rest of the stuff
            }
           

        function totalFees() {
            // the selector below lets us grab any element that has an id that begins with "fee"
            let feeElements = document.querySelectorAll("[id^=fee]");
            console.log(feeElements);
            let total;
            // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
            // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
            // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
            feeElements = [...feeElements];
            // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
            // Remember that the text that was entered into the input element will be found in the .value of the element.
            Array.array.forEach(feeElements => {
                total += feeElements;
            });
            // once you have your total make sure to return it!
            return total;
            }
        


            myForm = document.getElementsByName('Form')

        function successTemplate(info) {
            myForm.style.display = 'none';
            
        }















        participantSheet.addEventListener('click', function() {
            participantTemplate();
            console.log('Button is clicked');
        });








