modules.define('link', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.bindTo('click', function() { alert('Hello'); });
                }
            }
        }
    }));
});
