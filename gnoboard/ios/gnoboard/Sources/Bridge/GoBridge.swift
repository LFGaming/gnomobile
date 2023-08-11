import Foundation
import GnoCore

@objc(GoBridge)
class GoBridge: NSObject {
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    override init() {
        super.init()
    }

    deinit {
        do {
        } catch let error as NSError {
        }
    }

    @objc func constantsToExport() -> [AnyHashable : Any]! {
        #if DEBUG_LOGS
        let debug = true;
        #else
        let debug = false;
        #endif
        return ["debug": debug];
    }

    // //////// //
    // Protocol //
    // //////// //

    @objc func initBridge(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            resolve(true)
        } catch let error as NSError {
            reject("\(String(describing: error.code))", error.userInfo.description, error)
        }
    }

  @objc func hello(_ name: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      do {
          resolve(GnoGnomobileHello(name))
      } catch let error as NSError {
          reject("\(String(describing: error.code))", error.userInfo.description, error)
      }
  }

    @objc func closeBridge(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            resolve(true)
        } catch let error as NSError {
            reject("\(String(describing: error.code))", error.userInfo.description, error)
        }
    }
}