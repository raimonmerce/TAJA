export default class Translate { 
	//initialization
    constructor() {
    }

	init(attribute, lng){
		this.attribute = attribute;
		this.lng = lng;	  
        this.LngObject = [];
    }

	process(){
		let _self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "lng/"+this.lng+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					_self.LngObject = JSON.parse(xrhFile.responseText);
                    var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = _self.LngObject[key];
						}
					}
				}
			}
		}
		xrhFile.send();
    }

    translate(key){
        return this.LngObject[key];
    }
}