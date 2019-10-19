//mycomponet.js

const Mycomponent .....

export Mycomponent;
//



//myscreen.js

import {Mycomponent } from "../mycomponet"


///

//**************************************



//mycomponet.js

const Mycomponent .....
//
export default Mycomponent;
//



//myscreen.js

import  MYNEWComponet from "../mycomponet"

///
@Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
      return packages;
    }
