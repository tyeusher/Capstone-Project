import html from "html-literal";
import shoe from "../../images/shoe.jpg";
export default () => html
`
<div class="shop-store">

<div class="shoeTitle">
<h1>1995</h1>
</div>


<div class="menu">

	<div class="heading">
		<img src="${shoe}" class="shoes" width="250">
		<span class="shoeBay">montgomerey bay shoes number 44</span>
        </div>

	<div class="item">
		<h2>Price</h2>
		<p><span>MENS Price</span>
			<span>$90.00</span>
		</p>
		<p><span>Womens Price</span>
			<span>$70.00</span>
		</p>
		<p><span>SIZE 10 MENS</span>
			<span>AVAILABLE</span>
		</p>
		<p><span>SIZE 9 WOMANS</span>
			<span>AVAILABLE</span>
		</p>
	</div>

	<div class="item">
		<h2>COLORS</h2>
		<p><span>RED AND BLACK</span> <span>3</span></p>
		<p><span>BLUE AND YELLOW</span> <span>0</span></p>
		<p><span>PNK AND WHITE</span> <span>2</span></p>
	</div>

	<div class="item chill">
		<h2>RATED</h2>
		<p><span>5/5</span> <span></span></p>
		<p><span>TOP SELLER</span> <span></span></p>
	</div>


</div>

`;
