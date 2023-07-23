import React, { useState } from "react";

 const ProductTable=()=> {
    return (
        <table class="table-auto mt-20 w-1/2 ml-96">
  <thead>
    <tr className="border">
      <th>
      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

      </th>
      <th>IMAGE</th>
      <th>PRODUCT NAME</th>
      <th>STOCK</th>
      <th>PRICE</th>
      <th>CATEGORY</th>
      <th>ACTIONS</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>
    );
}


export default ProductTable

