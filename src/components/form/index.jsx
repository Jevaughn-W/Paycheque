import React from "react";


const provinces = ["Ontario"];  // To update list once database is expanded

const provinceList = provinces.map((province) => {
  return(
    <option value={province}>{province}</option>
  );
})


export default function Form() {

  return (
    <section class="userInput">
      <form>
        <input
          type="text"
          name="Salary"
          placeholder="Salary"
        />
       <label for="province-select">Province:</label>

        <select name="province" id="province-select">
          <option value="">--Please select your province--</option>
          {provinceList}
        </select>
        <button>Calculate</button>
      </form>
    </section>
  )

};