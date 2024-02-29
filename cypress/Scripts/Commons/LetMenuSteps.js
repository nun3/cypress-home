import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Menu } from './LetMenuAction';

const Actmenu = new Menu

When(`clico no item de menu {string}`, (menu) => {
    Actmenu.SetMenu(menu)
});