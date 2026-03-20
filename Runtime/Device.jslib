const deviceLibrary = {

  // Class definition.

  $device: {
    isMobileDevice: undefined,

    getIsMobile: function () {
      if (device.isMobileDevice === undefined) {
        const webglContext = document.createElement('canvas').getContext('webgl');
        device.isMobileDevice = navigator.maxTouchPoints > 0 && !!(webglContext && webglContext.getExtension('WEBGL_compressed_texture_etc'));
      }
      
      return device.isMobileDevice;
    },
  },

  // External C# calls.

  GetDeviceIsMobile: function () {
    return device.getIsMobile();
  },
}

autoAddDeps(deviceLibrary, '$device');
mergeInto(LibraryManager.library, deviceLibrary);
