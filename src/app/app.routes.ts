import { Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { MorseComponent } from './pages/morse/morse.component';
import { BinaryComponent } from './pages/binary/binary.component';
import { HexadecimalComponent } from './pages/hexadecimal/hexadecimal.component';

export const routes: Routes = [
    { path: 'Morse', component: MorseComponent },
    { path: 'Binary', component: BinaryComponent },
    { path: 'Hexadecimal', component: HexadecimalComponent },
];
