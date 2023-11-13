$(document).ready(() => {

  let tickets = {
        'november': [
            {
                date: 'Nov 26',
                location: 'Denver, CO, US',
                stop: 'Pepsi Center',
                time: '20:00',
                isValid: true
            },
            {
                date: 'Nov 28',
                location: 'Omaha, NE, US',
                stop: 'BOK Center',
                time: '20:00',
                isValid: false
            }
        ],

        'december': [
            {
                date: 'Dec 05',
                location: 'Denver, CO, US',
                stop: 'Pepsi Center',
                time: '20:00',
                isValid: true
            },
            {
                date: 'Dec 12',
                location: 'Tulsa, OK, US',
                stop: 'Century Center',
                time: '20:00',
                isValid: true
            },
            {
                date: 'Dec 19',
                location: 'St. Paul, MN, US',
                stop: 'Xcel Center',
                time: '20:00',
                isValid: true
            }
        ]
    };

    for (let key in tickets['november']) {
        let ticket = tickets['november'][key];
        let date = ticket.date;
        let loc = ticket.location;
        let stop = ticket.stop;
        let isValid = ticket.isValid;

        let isAvailable;
        let buttonClass = 'ticket_btn';

        if (isValid === false) {
            isAvailable = 'Sold Out';
            buttonClass += ' disabled_btn';
            // buttonClass.prop('disable', true);
        } else {
            isAvailable = 'Buy Ticket';
        }

        let ticketCard = `
            <div class="ticket">
                <div class="ticket_info">
                    <p class="ticket_title">${date}</p>
                    <p class="ticket_loc">${loc}</p>
                    <p class="ticket_dest">
                        <span>
                            <i class="fa fa-location"></i>
                            ${stop}
                        </span>
                        <span>
                            <i class="fa fa-clock"></i>
                            20:00
                        </span>
                    </p>
                </div>

                <button class="${buttonClass}" ${isValid ? '' : 'disabled'}>
                    <i class="fa fa-ticket"></i>
                    ${isAvailable}
                </button>
            </div>
        `;

        $('.january').append(ticketCard);
    }
  
});
