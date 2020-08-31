import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';
  
export const slide = trigger('slide', [
    transition(':enter', [
      style({ height: '0px', margin: '0px', overflow: 'hidden'  }),
      animate('0.5s 300ms ease-in', style({ height: '*' }))
    ]),
    transition(':leave', [
      style({ height: '*',  overflow: 'hidden'   }),
      animate('0.3s ease-out', style({ height: '0px', margin: '0px'  }))
    ])
  ]);
  
  export const routeY =
    trigger('routeAnimations', [
      transition('* => index', animate('0ms ease-out')),
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateY(100vh)',
          }),
        ], {optional: true}),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'translateY(0vh)' })),
        ], {optional: true})
      ])
  ]);