import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easyfullcalendar';

ngOnInit(){
       setTimeout(() => {
        $("#calendar").fullCalendar({  
                        header: {
                            left   : 'vorheriger,nächster Tag',
                            center : 'title',
                            right  : 'month,agendaWeek,agendaDay'
                        },
                        navLinks   : true,
                        editable   : true,
                        eventLimit : true,
                        events: [
                            {
                                title : 'This is your',
                                start : '2019-03-03T12:30:00',
                                color : '#f9c66a' // override!
                            },
                            {
                                title : 'Your meeting with john',
                                start : '2019-03-07T12:30:00',
                                end   : '2019-03-09',
                                color : "#019efb"
                            },
                            {
                                title  : 'This is Today',
                                start  : '2019-03-12T12:30:00',
                                allDay : false, // will make the time show,
                                color  : "#57cd5f"
                            }
                        ],  // request to load current events
                    });

     }, 100);
   }
}