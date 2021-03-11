import { forwardRef, ForwardRefFn } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

/** Helper function to create a DI provider and forward reference for
 *  for the given type
 * @param {ForwardRefFn} refFn A function returning the token to create a DI reference for.
 * Typically this will be the Component's type.
 *
 * @example
 *
 * `@Component({
 *    providers: [provideValueAccessor(() => MyComponent)]
 * })
 * class MyComponent() {}`
 */
export default function provideValueAccessor(refFn: ForwardRefFn) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(refFn),
    multi: true
  };
}
