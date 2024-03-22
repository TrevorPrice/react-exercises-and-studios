import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.marthastewart.com/1104488/five-ingredient-chocolate-chip-cookies";
   let authorPhoto = "https://www.marthastewart.com/thmb/ANipg5xH_aa_cJ9JAeOAVqzQe0o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cream-butter-sugar-0622-f6108609557d491fa54a22c177b483ed.jpg";
   let authorName = "Martha Stewart Test Kitchen";

   return (
      <div>
         <img src={authorPhoto} alt = "Marth Stewart" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
     "1 cup almond butter",
     "1 cup semisweet chocolate chips",
     "½ cup packed light-brown sugar",
     "2 large eggs",
     "½ teaspoon coarse salt",
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
     <div>
       <div>
         <h1>Five-Ingredient Chocolate Chip Cookies</h1>
         <p>Longing for homemade chocolate chip cookies in a snap? Nut butter
           does double duty by replacing both flour and regular butter in these
           five-ingredient, two-bite (gluten-free!) treats.</p>
       </div>
       <div className="recipePhotoBlock">
         <RecipeIngredients />
         <RecipeAuthor />
       </div>
     </div>
   );
}

const RecipePhoto = () => {
   return (
     <img
       src="https://www.marthastewart.com/thmb/UY9PeQ9cLbSiZch3At5lxIP9hOQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/five-ingredient-cookies-369-d111686_horiz-6b200e9947aa465aaf77c65ebb40655b.jpgitokU9pyDEBX"
       alt="cookies"
       className="imageUpdates"
     />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
