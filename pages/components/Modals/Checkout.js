import React from 'react'

const Checkout = (props) => {
  return (
<div class="bg-gray-800 p-8">
  <div class="max-w-md mx-auto bg-gray-700 p-6 rounded-lg">
    <p class="text-white">Pay Rs : {props.totalAmount}</p>
    <p class="text-white">Try it out!</p>

    <br />

    <label class="inline-block">
      <span class="btn bg-gray-500">Click here to open the confirm</span>
      <input type="checkbox" class="hidden" />
      <div class="confirm-modal">
        <form action="#do-something" method="get">

          <button class="btn bg-blue-500">Yes</button>
          <button class="btn bg-blue-500" formaction="#do-something-else">No</button>
        </form>
      </div>
    </label>
  </div>
</div>



  )
}

export default Checkout


