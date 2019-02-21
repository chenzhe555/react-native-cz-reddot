
package com.chenzhe.reddot;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNCzReddotModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNCzReddotModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNCzReddot";
  }
}