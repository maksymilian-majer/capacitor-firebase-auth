
  Pod::Spec.new do |s|
    s.name = 'CapacitorFirebaseAuth'
    s.version = '3.0.0-rc.0'
    s.summary = 'Capacitor plugin for Firebase Authentication'
    s.license = 'MIT'
    s.homepage = 'https://github.com/baumblatt/capacitor-firebase-auth.git'
    s.author = 'Bernardo Baumblatt'
    s.source = { :git => 'https://github.com/baumblatt/capacitor-firebase-auth.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '12.0'
    s.dependency 'Capacitor'
    s.dependency 'Firebase/Core', '~> 6.2'
    s.dependency 'Firebase/Auth', '~> 6.2'
    s.static_framework = true
  end
