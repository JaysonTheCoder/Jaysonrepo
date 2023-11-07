var homepage = () => {
   goto = {
      bookingPage: function() {
         window.open('/booking_form/booking.html')
      },
      historyPage: function() {
         window.open('/History/history_page.html')
      },
      bulletinPage: function(){
         window.open('/bulletin_page/bulletin.html')
      },
      homePage: function(){
         window.open('/homepage/index.html')
      }
   }
    
   
}
homepage()