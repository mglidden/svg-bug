if (Meteor.isClient) {
  Template.svgs.helpers({
	  svgSafeString: function() {
	  	return Spacebars.SafeString("<ellipse style='stroke:black; fill:green;' cx='50' cy='50' rx='50' ry='50' />");
	  },
		
		svgUnsafe: function() {
			return "<ellipse style='stroke:black; fill:green;' cx='50' cy='50' rx='50' ry='50' />";
		},
		
		svgElement: function() {
			return "<svg \
				xmlns:svg='http://www.w3.org/2000/svg' \
				xmlns='http://www.w3.org/2000/svg' \
				version='1.0' \
				preserveAspectRatio='xMidYMid' \
				viewBox='0 0 100 100'> \
				<ellipse style='stroke:black; fill:green;' cx='50' cy='50' rx='50' ry='50' /> \
			</svg>";
		}
  });
}
