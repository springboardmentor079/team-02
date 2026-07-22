const fs = require('fs');
const html = fs.readFileSync('frontend/src/app/pages/landing/landing.component.html', 'utf8');

// Best effort JSX conversion
let jsx = html.replace(/class=/g, 'className=');
jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
jsx = jsx.replace(/<img(.*?)>/g, (match, p1) => `<img${p1} />`);
jsx = jsx.replace(/<input(.*?)>/g, (match, p1) => `<input${p1} />`);

// Replace Angular bindings (very basic)
jsx = jsx.replace(/\[class\.([a-zA-Z0-9_-]+)\]="([^"]+)"/g, (match, cls, cond) => `className={\`${cond} ? '${cls}' : ''\`}`);
jsx = jsx.replace(/\(click\)="([^"]+)"/g, (match, fn) => `onClick={() => ${fn.replace(/\(\)/, '')}}`);
jsx = jsx.replace(/\[src\]="([^"]+)"/g, 'src={$1}');
jsx = jsx.replace(/\[alt\]="([^"]+)"/g, 'alt={$1}');
jsx = jsx.replace(/\[ngStyle\]="([^"]+)"/g, 'style={$1}');
jsx = jsx.replace(/\[style\.transform\]="([^"]+)"/g, 'style={{ transform: $1 }}');
jsx = jsx.replace(/\[ngClass\]="([^"]+)"/g, ''); // Handle ngClass manually
jsx = jsx.replace(/\*ngIf="([^"]+)"/g, ''); // Handle ngIf manually
jsx = jsx.replace(/\*ngFor="([^"]+)"/g, ''); // Handle ngFor manually
jsx = jsx.replace(/#navItem/g, ''); 
jsx = jsx.replace(/@fadeSlideUp/g, '');

fs.writeFileSync('C:/Users/hemso/.gemini/antigravity-ide/brain/db90cdf8-f866-4b24-af32-6a80b53560af/scratch/LandingView.jsx', jsx);
