define(
    function() {
        var ContactsView = GlueJS.View.extend({
            el: '#content',
            template: 'ContactsTemplate',
            events: {
                'click #search_contacts': 'searchContacts'
            },
            onAfterRender: function(options) {
                this.searchContacts();
            },
            searchContacts: function() {
                var options = new ContactFindOptions();
                options.filter = $('#search_name').val() || '김';
                options.multiple = true;
                filter = ['displayName', 'name'];
                navigator.contacts.find(filter, this.onSuccess, this.onError, options);
            },
            onSuccess: function(contacts) {
                if(contacts.length > 0) {
                    var size = contacts.length < 10 ? contacts.length : 10;
                    $('#listview').html('<li class="list-group-item list-group-item-success"><b>총 ' + contacts.length + '</b>명 (테스트 10명만 출력합니다.)</li>');
                    for (var i = 0; i < size; i++) {
                        $('#listview').append('<li class="list-group-item">' + contacts[i].name.formatted +'</li>')
                    }
                } else {
                    $('#listview').html('<li class="list-group-item list-group-item-success">검색 결과가 없습니다.</li>');
                }
            },
            onError: function(contactError) {
                alert('onError! : ' + contactError);
            }
        });
        return ContactsView;
    }
);